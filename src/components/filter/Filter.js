import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import arrow from '../../images/icon_arrow_down.svg';
import VirtualizedSelect from 'react-virtualized-select';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-select/dist/react-select.css'
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'


class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectCity: '',
    }
  }

  render() {
    return (
      <section className="main__filter">
        <article>
          <form>
            <div className="main__filter--chat">
              <div className="main__filter--where">
                <strong>도시</strong>
                {/* <a><p>어디로 가세요?</p><img src={arrow} alt="도시 선택" /></a> */}
                <VirtualizedSelect
                  placeholder="어디로 가세요?"
                  options={this.props.cities}
                  onChange={(selectCity) => this.setState({ selectCity })}
                  value={this.state.selectCity}
                />
              </div>
              <div className="main__filter--date">
                <strong>일정</strong>
                {/* <a><p>여행 날짜</p><img src={arrow} alt="출발 여행날짜 선택" /></a> */}
                <SingleDatePicker
                  date={this.state.date}
                  onDateChange={date => this.setState({ date })}
                  focused={this.state.focused}
                  onFocusChange={({ focused }) => this.setState({ focused })}
                  displayFormat="YYYY-MM-DD"
                  placeholder="여행 날짜"
                />
              </div>
              <div className="main__filter--list">
                <strong>대화방 리스트</strong>
                <a><p>인기순</p><img src={arrow} alt="대화방 리스트 선택" /></a>
              </div>
              <div className="main__filter--search">
                <button type="button">검색</button>
              </div>
            </div>
          </form>
        </article>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  cities: state.cities
})

export default connect(mapStateToProps)(Filter)