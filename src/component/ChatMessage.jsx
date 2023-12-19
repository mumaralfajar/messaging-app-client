import Avatar from 'react-avatar';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';

function ChatMessage({ message, username }) {
  ChatMessage.propTypes = {
    message: PropTypes.object.isRequired,
    username: PropTypes.string.isRequired,
  };

  if (message.type === 'CONNECT' || message.type === 'DISCONNECT') {
    return (
      <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', margin: '10px 0'}}>
        <p style={{color: message.type === 'CONNECT' ? 'lime' : 'orangered'}}>{message.sender + " " + message.type.toLowerCase() + "ed"}</p>
      </Box>
    );
  }

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: message.sender === username ? 'flex-end' : 'flex-start', margin: '10px 0' }}>
      <Box sx={{ marginRight: message.sender === username ? '8px' : 'auto', display: 'flex', flexDirection: message.sender === username ? 'row-reverse' : 'row', alignItems: 'center', gap: 1 }}>
        <Avatar name={message.sender} size="35" round={true} />
        <h4>{message.sender}</h4>
      </Box>
      <Box sx={{
        marginRight: message.sender === username ? '8px' : 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '60%',
        height: '16px',
        padding: '10px',
        borderRadius: '16px',
        backgroundColor: 'primary.main',
        wordWrap: 'break-word',
      }}>
        <p>{message.content}</p>
      </Box>
    </Box>
  );
}

export default ChatMessage;