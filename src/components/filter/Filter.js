import React, { Component } from 'react';
import { connect } from 'react-redux';
// import sortBy from 'lodash/sortBy';
import arrow from '../../images/icon_arrow_down.svg';
import VirtualizedSelect from 'react-virtualized-select';
import 'react-dates/initialize';
import './react_dates_overrides.css';
import { SingleDatePicker } from 'react-dates';
import 'react-select/dist/react-select.css';
import 'react-virtualized/styles.css';
import 'react-virtualized-select/styles.css';
import './react-virtualized-select_overrides.css';
import { getChatList } from '../../action/action_getChatList';


class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterURI: '',
      selectedCity: '',
      selectedDate: '',
      selectedSort: {
        label: '최신순',
        value: 'latest',
      },
      lastId: 0,
      lastLike: 0,
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleOnScroll);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleOnScroll);
  }
  
  // 스크롤이 마지막에 왔을 때 쿼리 스트링 보내는 함수
  querySearchResult = () => {
    // 마지막 대화방의 id와 like를 파라미터로 넘겨준다.
    let lastId = `${this.props.chatList[this.props.chatList.length - 1].id}`;
    let lastLike = `${this.props.chatList[this.props.chatList.length - 1].like}`;
    this.setState({
      lastId,
      lastLike,
    });
    setTimeout(this.props.getChatList(lastId, lastLike, ''), 1000);
  }

  // 스크롤이 마지막 왔을 때 이벤트
  handleOnScroll = () => {
    var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    var scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
    var clientHeight = document.documentElement.clientHeight || window.innerHeight;
    var scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

    if (scrolledToBottom) {
      this.querySearchResult();
    }
  }

  // 필터링 쿼리 스트링 만들기
  makeFilterURI = () => {
    let filterURI = '';
    if (this.state.selectedCity) {
      filterURI += `&city_id=${this.state.selectedCity.value}`;
    }
    if (this.state.selectedDate) {
      filterURI += `&start_at=${this.state.selectedDate.format('YYYY-MM-DD')}`;
    }
    if (this.state.selectedSort) {
      filterURI += `&sort=${this.state.selectedSort.value}`;
    }
    console.log(filterURI);
    this.setState({
      filterURI
    })
  }

  // 검색버튼 핸들러
  onSearchHandler = () => {
    this.makeFilterURI();
    console.log(this.state.filterURI)
    this.props.getChatList('', '', this.state.filterURI);
  }

  render() {
    return (
      <section className="main__filter">
        <article>
          <div className="main__filter--chat">
            <div className="main__filter--where">
              <strong>도시</strong>
              <VirtualizedSelect
                placeholder="어디로 가세요?"
                options={this.props.cities}
                onChange={(selectedCity) => this.setState({ selectedCity })}
                value={this.state.selectedCity}
              />
              <img src={arrow} alt="도시 선택" />
            </div>
            <div className="main__filter--date">
              <strong>일정</strong>
              <SingleDatePicker
                date={this.state.selectedDate}
                onDateChange={selectedDate => this.setState({ selectedDate })}
                focused={this.state.focused}
                onFocusChange={({ focused }) => this.setState({ focused })}
                displayFormat="YYYY년 MM월 DD일"
                placeholder="여행 날짜"
                isOutsideRange={() => false}
              />
              <img src={arrow} alt="출발 여행날짜 선택" />
            </div>
            <div className="main__filter--list">
              <strong>대화방 리스트</strong>
              <VirtualizedSelect
                placeholder="인기순"
                options={this.props.sort}
                onChange={(selectedSort) => this.setState({ selectedSort })}
                value={this.state.selectedSort}
              />
              <img src={arrow} alt="대화방 리스트 선택" />
            </div>
            <div className="main__filter--search">
              <button type="button" onClick={this.onSearchHandler}>검색</button>
            </div>
          </div>
        </article>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  cities: state.cities,
  sort: state.sort,
  chatList: state.databaseReducer.chatList,
  // chatList: state.ChatListData.chatList,
})

const mapDispatchToProps = (dispatch) => ({
  getChatList: (LAST_ID, LAST_LIKE, FILTER) => dispatch(getChatList(LAST_ID, LAST_LIKE, FILTER)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);