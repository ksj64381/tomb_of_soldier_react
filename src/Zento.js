import React from 'react'

function remainingDay(start, end) {
  return Math.round(Math.abs(
    (new Date(start).getTime() - new Date(end).getTime()) / (1000 * 3600 * 24)
  ))
}

let remainPeriod = remainingDay(new Date(), '2023-09-13')
let fullPeriod = remainingDay('2022-03-17', '2023-09-13')

//남은 날짜를 기준으로 현재까지 복무를 몇% 마쳤는지 백분율로 환산
let wid = 100 - (remainPeriod / fullPeriod) * 100
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

export function Zento(){
  return(
    <div style={{
      position:"absolute",
      top:0,
      left:0,
      width:"100%",
      height:"100%",
      backgroundColor:"rgb(46, 46, 48)"

    }}
    >
      <center>
        <img src="img/RIP_Z.PNG" />
        <h2 style={stl_h}> 전역까지 {remainPeriod}일</h2>
        <Progress />
      </center>
    </div>
  )
}