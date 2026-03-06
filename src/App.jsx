import './App.css';
import Card from './Card';
import { useState } from 'react';

const App = () => {

const [currentIndex, setCurrentIndex] = useState(0);

const cards = [
  { question: "Telnet", answer: "Allows a user on a remote client machine, called the Telnet client, to access the resources of another machine, the Telnet server.", layer: "Application" },
  { question: "File Transfer Protocol (FTP)", answer: "Allows you to transfer files across an IP network, and it can accomplish this between any two machines that are using it.", layer: "Application" },
  { question: "Secure File Transfer Protocol (SFTP)", answer: "Used when you need to transfer files over an encrypted connection. It uses SSH which encrypts the connection. Secure FTP.", layer: "Application" },
  { question: "Simple Mail Transfer Protocol (SMTP)", answer: "Used to send mail. Answering our ubiquitous call to email, uses spooled or queued, method of mail delivery.", layer: "Application" },
  { question: "Post Office Protocol (POP)", answer: "Gives us a storage facility for incoming mail. When a client device connects to a POP3 server, messages addresses to that client are released for downloading.", layer: "Application" },
  { question: "Internet Message Access Protocol (IMAP)", answer: "Mail delivery service that gives the user more control over the download of mail. Allows user to receive small packets of the email at a time to make sure it is secure.", layer: "Application" },
  { question: "Transport Layer Security/Secure Socket Layer (TLS/SSL)", answer: "These are cryptographic protocols that come in handy for enabling secure online data-transfer activities like browsing the Web, instant messaging, etc.", layer: "Session" },
  { question: "Remote Desktop Protocol (RDP)", answer: "Proprietary protocol developed by Microsoft. Allows you to connect to another computer and run programs.", layer: "Application" },
  { question: "Session Initiation Protocol (SIP)", answer: "Popular signaling protocol used to construct and deconstruct multimedia communication sessions for many uses.", layer: "Application" },
  { question: "Simple Network Management Protocol (SNMP)", answer: "Collects and manipulates valuable network information. Used to help monitor networks and inform administrators when there is a problem.", layer: "Application" },
  { question: "Secure Shell (SSH)", answer: "Sets up a Telnet session over a standard TCP/IP connection. Is employed for doing links like logging into other systems, running programs on remote systems, or moving files from one system to another.", layer: "Application" },
  { question: "Hypertext Transfer Protocol (HTTP)", answer: "Manages communication between web browsers and web servers, and opens the right resources when you click on a link.", layer: "Application" },
  { question: "Domain Name Service (DNS)", answer: "Resolves hostnames, specifically Internet names. Converts domain names into IP addresses.", layer: "Application" },
  { question: "NetBIOS", answer: "Works only in the upper layers of the OSI model and allows for an interface on separate computer to communicate over a network.", layer: "Session" },
  { question: "Dynamic Host Configuration Protocol (DHCP)", answer: "Assigns IP addresses to hosts with information provided by a server.", layer: "Application" },
  { question: "Transmission Control Protocol (TCP)", answer: "Connection-oriented protocol that provides reliable, ordered, and error-checked delivery of data between applications.", layer: "Transport" },
  { question: "User Datagram Protocol (UDP)", answer: "Connectionless protocol that provides fast, lightweight transmission of data without guaranteed delivery or ordering.", layer: "Transport" },
  { question: "Internet Protocol (IP)", answer: "Responsible for addressing and routing packets of data so they can travel across networks and arrive at the correct destination.", layer: "Network" },
  { question: "Address Resolution Protocol (ARP)", answer: "Maps IP addresses to MAC addresses on a local network, allowing devices to find each other at the data link layer.", layer: "Data Link" },
  { question: "Internet Control Message Protocol (ICMP)", answer: "Used by network devices to send error messages and operational information, commonly used by the ping command to test connectivity.", layer: "Network" }
]

const getRandomCard = () => {
  const randomIndex = Math.floor(Math.random() * cards.length)
  setCurrentIndex(randomIndex)
}

const getPreviousCard = () => {
  if (currentIndex > 0) {
    setCurrentIndex(currentIndex - 1)
  }
}

  return (
    <div className="App">
      <div className="Header">
        <h1>Network Protocols</h1>
        <h2>Total cards: {cards.length}</h2>
        <p>How well do you know your protocols? Test your knowledge!</p>
      </div>

    <Card key={currentIndex} card={cards[currentIndex]} />  


    <button onClick={getPreviousCard}>Previous</button>
    <button onClick={getRandomCard}>Next</button>



    </div>
  )
}

export default App
