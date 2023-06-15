import { DisplayContainer } from './styles'

export const Display = ({value}) => {
    return (
      <DisplayContainer>
       <input disabled value={value}/>
      </DisplayContainer>
    );
}