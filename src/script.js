var firstNum, operator, previousKey, previousNum;
// 위의 전역변수를 잘 활용하여, 계산기를 구현합니다.

const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const buttons = calculator.querySelector('.calculator__buttons'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const display = document.querySelector('.calculator__display'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
// ! 위 코드(Line 1 - 6)는 수정하지 마세요.

function calculate(n1, operator, n2) {
  let result = '';
  // TODO : n1과 n2를 operator에 따라 계산하는 함수를 만드세요.
  // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴됩니다.

  if(operator === '+'){
    result = String(Number(n1) + Number(n2))
  }
 
  if (operator === '-')
    result = String(Number(n1) - Number(n2))

  if (operator === '*')
    result = String(Number(n1) * Number(n2))

  if (operator === '/')
      result = String(Number(n1) / Number(n2))
    
  return Number(result);
}



buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드(Line 19 - 21)는 수정하지 마세요.

  if (target.matches('button')) {
    // TODO : 계산기가 작동할 수 있도록 아래 코드를 수정하세요. 작성되어 있는 조건문과 console.log를 활용하시면 쉽게 문제를 풀 수 있습니다.
    // 클릭된 HTML 엘리먼트가 button이면
    if (action === 'number') {
      // 그리고 버튼의 클레스가 number이면-> action에는 HTML 엘레먼트의 클래스 정보가 있다.  
      // 아래 코드가 작동됩니다.
      if (display.textContent === '0' ||
      previousKey === 'operator'){
      
        console.log('숫자' + buttonContent + '버튼')
        display.textContent = buttonContent;
        //display.textContent 
      }
        
      else if(display.textContent !== '0'){

        console.log('숫자' + buttonContent + '버튼');
        display.textContent = display.textContent + buttonContent;
        //HTML의 display 엘리먼트가 0보다 큰 수라면 문자형인 buttonContent 를 더해서 붙여준다. ex) 1+1= 11, 1+3+5+3 = 1353
      }

      previousKey = 'number';

    }

    if (action === 'operator') {
      //연산자 버튼을 누르면 
      console.log('연산자 ' + buttonContent + ' 버튼');
      operator = buttonContent;
      // 클릭된 것이 operator 에 할당된다. 즉 display.textcontent 는 기존과 같다. 
      firstNum = display.textContent;
      // display.textContent = display.textContent + operator;
      previousKey = 'operator';
    }
    

    if (action === 'decimal') {
      console.log('소수점 ' + buttonContent + ' 버튼');
      
      previousKey = 'decimal';
    }

    if (action === 'clear') {
      firstNum = undefined;
      operator = undefined;

      display.textContent = '0';
      console.log('초기화 버튼');
      previousKey = 'clear';
    }

    if (action === 'calculate') {
      console.log('계산 버튼');
      display.textContent = calculate(firstNum, operator, display.textContent)
      previousKey = 'calculate';
    }
  }
});