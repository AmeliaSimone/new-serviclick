import React from 'react';
import styles from "./Message.module.scss"; 

interface MessageProps {
  htmlContent: string;
}

const Message: React.FC<MessageProps> = ({ htmlContent }) => {
  return (
    <div className={styles.message}>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      <div className={styles.line}></div>
    </div>
  );
};

export default Message;
