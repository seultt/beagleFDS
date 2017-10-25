import React, { Component } from 'react';
import { connect } from 'react-redux';
import sortBy from 'lodash/sortBy';
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
      queryStringURI: '',
      selectedCity: '',
      selectedDate: '',
      selectedSort: {
        label: '최신순',
        value: 'latest',
      },
      per_page: 0,
      requestSent: false,
    }
  }
  componentDidMount = () => {
    window.addEventListener('scroll', this.handleOnScroll);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleOnScroll);
  }
  
  querySearchResult = () => {
    // this.makeURI();
    // let queryStringURI = this.state.queryStringURI;
    let per_page = `per_page=${this.state.per_page+=6}`;
    // console.log(queryStringURI);
    console.log(per_page);
    if (this.state.requestSent) {
      return;
    }
    
    setTimeout(this.props.getChatList(per_page), 1000);
    console.log('스크롤 내려왔나')
    this.setState({requestSent: true});
  }

  handleOnScroll = () => {
    var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    var scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
    var clientHeight = document.documentElement.clientHeight || window.innerHeight;
    var scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

    if (scrolledToBottom) {
      this.querySearchResult();
    }
  }

  makeURI = () => {
    let queryStringURI = '';
    if (this.state.selectedCity) {
      queryStringURI += `city_id=${this.state.selectedCity.value}`;
    }
    if (this.state.selectedDate) {
      queryStringURI += `&start_at=${this.state.selectedDate.format('YYYY-MM-DD')}`;
    }
    if (this.state.selectedSort) {
      queryStringURI += `&sort=${this.state.selectedSort.value}`;
    }
    queryStringURI += `&startIndex=${this.state.startIndex}`
    console.log(queryStringURI);
    this.setState({
      queryStringURI
    })
  }

  onSearchHandler = () => {
    this.makeURI();
    this.props.getChatList(this.state.queryStringURI);
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
})

const mapDispatchToProps = (dispatch) => ({
  getChatList: (filterURI) => dispatch(getChatList(filterURI)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);