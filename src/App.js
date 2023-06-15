import React, { useState } from 'react';
import { Container, Content, ButtonsContent, Row } from './styles';
import { Display } from './components/Display';
import { Button, LargeButton } from './components/Button/';
import { evaluate } from 'mathjs';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');

  const handleDelete = () => {
    setCurrentNumber('0')
  }

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${(prev === '0' & number.match(/[0-9]/g) !== null) | prev.toString().toLocaleLowerCase() === 'infinity' |  prev.toString().toLocaleLowerCase() === 'math error' ? '' : prev}${number}`)
  }

  const handleResult = () => {
    if (isNaN(evaluate((currentNumber))) || currentNumber.includes('/ 0')) {
      setCurrentNumber('Math ERROR')
    } else {
      setCurrentNumber(evaluate((currentNumber)))
    }
  }

  return (
    <div className='body'>
      <Container>
        <Content>
          <Display value={currentNumber} />
          <ButtonsContent>
            <Row >
              <LargeButton label='DEL' onClick={handleDelete} />
              <Button label='x' onClick={() => handleAddNumber(' * ')} />
              <Button label='%' onClick={() => handleAddNumber(' % ')} />
            </Row>
            <Row >
              <Button label='7' onClick={() => handleAddNumber('7')} />
              <Button label='8' onClick={() => handleAddNumber('8')} />
              <Button label='9' onClick={() => handleAddNumber('9')} />
              <Button label='/' onClick={() => handleAddNumber(' / ')} />
            </Row>
            <Row >
              <Button label='4' onClick={() => handleAddNumber('4')} />
              <Button label='5' onClick={() => handleAddNumber('5')} />
              <Button label='6' onClick={() => handleAddNumber('6')} />
              <Button label='+' onClick={() => handleAddNumber(' + ')} />
            </Row>
            <Row >
              <Button label='1' onClick={() => handleAddNumber('1')} />
              <Button label='2' onClick={() => handleAddNumber('2')} />
              <Button label='3' onClick={() => handleAddNumber('3')} />
              <Button label='-' onClick={() => handleAddNumber(' - ')} />
            </Row>
            <Row >
              <Button label='0' onClick={() => handleAddNumber('0')} />
              <Button label='.' onClick={() => handleAddNumber('.')} />
              <LargeButton label='RESULT' onClick={handleResult} />
            </Row>
          </ButtonsContent>
        </Content>
      </Container>
    </div>
  );
}

export default App;
