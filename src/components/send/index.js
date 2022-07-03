import React, {useState} from 'react';
import axios from 'axios';
import { SendContainer, SendHeader, SendInput, SendBtn, SendArea, HomeBtn } from './styles';

const Send = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const sendMail = async (e) => {
    e.preventDefault();
    setSent(true);
    const res = await axios.put('http://localhost:4000/send-mail', {email: email})
      .then(result => console.log(result.data))
      .catch(err => console.log(err));
  }

  return (
    <SendContainer>
      {
        !sent ? (
          <SendArea onSubmit={sendMail}>
            <SendHeader>Please enter email you would like to send an 'aeuhhh' to:</SendHeader>
            <SendInput placeholder="Email" type='text' value={email} onChange={e => {setEmail(e.target.value );}}></SendInput>
            <SendBtn type='submit'>Send</SendBtn>
          </SendArea>
        ) :
        (
          <SendArea>
            <SendHeader>'aeuhhh' has been mailed!</SendHeader>
            <HomeBtn to='/'>Go to Home</HomeBtn>
          </SendArea>
        )
      }  
    </SendContainer>
  )
}

export default Send;