import './App.css';
import Card from './Card';
import { useState } from 'react';

const App = () => {

const [currentIndex, setCurrentIndex] = useState(0);

const cards = [
  { question: "Telnet", answer: "Allows a user on a remote client machine, called the Telnet client, to access the resources of another machine, the Telnet server." },
  { question: "File Transfer Protocol (FTP)", answer: "Allows you to transfer files across an IP network, and it can accomplish this between any two machines that are using it." },
  { question: "Secure File Transfer Protocol (SFTP)", answer: "Used when you need to transfer files over an encrypted connection. It uses SSH which encrypts the connection. Secure FTP." },
  { question: "Simple Mail Transfer Protocol (SMTP)", answer: "Used to send mail. Answering our ubiquitous call to email, uses spooled or queued, method of mail delivery." },
  { question: "Post Office Protocol (POP)", answer: "Gives us a storage facility for incoming mail. When a client device connects to a POP3 server, messages addresses to that client are released for downloading." },
  { question: "Internet Message Access Protocol (IMAP)", answer: "Mail delivery service that gives the user more control over the download of mail. Allows user to receive small packets of the email at a time to make sure it is secure." },
  { question: "Transport Layer Security/Secure Socket Layer (TLS/SSL)", answer: "These are cryptographic protocols that come in handy for enabling secure online data-transfer activities like browsing the Web, instant messaging, etc." },
  { question: "Remote Desktop Protocol (RDP)", answer: "Proprietary protocol developed by Microsoft. Allows you to connect to another computer and run programs." },
  { question: "Session Initiation Protocol (SIP)", answer: "Popular signaling protocol used to construct and deconstruct multimedia communication sessions for many uses." },
  { question: "Simple Network Management Protocol (SNMP)", answer: "Collects and manipulates valuable network information. Used to help monitor networks and inform administrators when there is a problem." },
  { question: "Secure Shell (SSH)", answer: "Sets up a Telnet session over a standard TCP/IP connection. Is employed for doing links like loggin into other systems, running programs on remote systems, or moving giles from one system to another." },
  { question: "Hypertext Transfer Protocol (HTTP)", answer: "Manages commnication between web browsers and web servers, and opens the right resources when you click on a link." },
  { question: "Domain Name Service (DNS)", answer: "Resolves hostnames, specifically Internet names. Converts domain names into IP addresses." },
  { question: "NetBIOS", answer: "Works only in the upper layers of the OSI model and allows for an interface on separate computer to communicate over a network." },
  { question: "Dynamic Host Configuration Protocol (DHCP)", answer: "Assigns IP addresses to hosts with infoormation provided by a server." }
]

  return (
    <div className="App">
      <div className='Header'>
        <h1>network protocols</h1>
        <h2>total cards: {cards.length}</h2>
        <p>how well do you know your protocols? test your knowledge!</p>
      </div>

    <Card card={cards[currentIndex]} />


    </div>
  )
}

export default App
