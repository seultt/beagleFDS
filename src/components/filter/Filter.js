import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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


class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCity: '',
      selectedDate: '',
      selectedSort: {
        label: '인기순',
        value: 'like',
      },
    }
  }

  onSearchHandler = () => {
    let defaultURI = '/api/chat-list';
    if (this.state.selectedCity) {
      defaultURI += `?city=${this.state.selectedCity.value}`;
    }
    if (this.state.selectedDate) {
      defaultURI += `&date=${this.state.selectedDate.format('YYYY-MM-DD')}`;
    }
    if (this.state.selectedSort) {
      defaultURI += `&sort=${this.state.selectedSort}`
      console.log(defaultURI);
    }
    // this.props.getCitiesAction(defaultURI)
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

export default connect(mapStateToProps)(Filter)