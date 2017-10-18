import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../images/icon_arrow_down.svg';
import VirtualizedSelect from 'react-virtualized-select';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-select/dist/react-select.css'
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'


export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const options = [
      { label: "교토", value: 1 },
      { label: "제주도", value: 2 },
      { label: "파리", value: 3 },
      { label: "방콕", value: 4 },
      { label: "런던", value: 5 },
      { label: "도쿄", value: 6 },
      { label: "로마", value: 7 },
      { label: "오사카", value: 8 },
      { label: "후쿠오카", value: 9 },
      { label: "프라하", value: 10 },
      { label: "바르셀로나", value: 11 },
      { label: "서울", value: 12 },
      { label: "뉴욕", value: 13 },
      { label: "홍콩", value: 14 },
      { label: "로스엔젤레스", value: 15 },
      { label: "다낭", value: 16 },
      { label: "세부", value: 17 },
      { label: "하노이", value: 18 },
      { label: "삿포로", value: 19 },
      { label: "싱가포르", value: 20 },
    ];

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
                  options={options}
                  onChange={(selectValue) => this.setState({ selectValue })}
                  value={this.state.selectValue}
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