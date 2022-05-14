import React from 'react';

const date1 = new Date()
const date2 = new Date('2023-06-25')
const date3 = new Date('2021-12-17')

const date_diff1 = Math.floor(
  Math.abs((date1.getTime() - date2.getTime()) / (1000 * 3600 * 24))
)
const date_diff2 = Math.floor(
  Math.abs((date3.getTime() - date2.getTime()) / (1000 * 3600 * 24))
)

const Park = React.createElement(
  'h1',
  { style: { color: 'red' } },
  '전역까지' + date_diff1 + '일'
)

//남은 날짜를 기준으로 현재까지 복무를 몇% 마쳤는지 백분율로 환산
let wid = 100 - (date_diff1 / date_diff2) * 100
wid = Math.floor(wid * 100) / 100

//환산한 값을 사이트에 진행도 바로 표시
const elem = document.getElementById('box')

let stl = {
  width: wid + '%',
  backgroundColor: 'green',
  height: '30px',
  color: 'white',
  textAlign: 'center',
}

let stl_p = {
  width: '500px',
  backgroundColor: 'gray',
  height: '30px',
  align: 'left',
}

let stl_h = {
  color: 'red',
  font: 'bold',
}

function B() {
  return <div style={stl}>{wid + '%'}</div>
}

function Progress() {
  return (
    <div style={stl_p} align={'left'}>
      {' '}
      <B />{' '}
    </div>
  )
}

function App() {
  return (
    <center>
      <image src='img/RIP_Z.png'/>
      <h2 style={stl_h}> 전역까지 {date_diff1}일</h2>
      <Progress />
    </center>
  )
}

export default App
