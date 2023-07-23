const Questions = {
  module1_3: [
    { q: 'What are common methods of data transmission?', a: '1. Electrical signals<br>2. Optical signals<br>3. Wireless signals', tag: 0 },
    { q: 'Name network types', a: '1. Small home<br>2. Small office/home office<br>3. Medium to large<br>4. Internet', tag: 0 },
    { q: 'Types of personal data', a: '1. Volunteer data<br>2. Observed data<br>3. Inferred data', tag: 0 },
    { q: 'What is P2P network?', a: 'Two computers connected directly, both are client and server at the same time', tag: 0 },
    { q: 'What is IP phone?', a: 'It uses VoIP technology. Can be hardware phone or softphone', tag: 0 },
    { q: 'Two options to connect home user to ISP. Explain each', a: '1) Coaxial cable<br>2. DSL - Digital Subscriber Line', tag: 0 },
    { q: 'What is SSID?', a: 'Service Set Identifier<br>It Uniquely names a WIFI network', tag: 0 },
    { q: 'What is GSM?', a: 'Global System for Mobile Communications', tag: 0 },
    { q: 'Whats is NFC?', a: 'Near Field Communications', tag: 0 },
    { q: 'Distances covered by 1) Wifi, 2) Bluetooth 3) WWAN', a: '1) Wifi - 0.18 miles<br>2) Bluetooth - 0.05mi<br>3) WWAN (Wireless wide-area network) - few miles', tag: 0 },
    { q: 'Which 2 technologies are used in tethering?', a: '1) USB<br>2) Bluetooth', tag: 0 },
    ],
    module4_7: [
      { q: 'Describe combined homenetworking device', a: '1. Build-in modem<br>2. Router<br>3. Wireless transmitter<br>4. Lan switch', tag: 0 },
      { q: 'Three types of wired connections, explain each', a: '1) Category 5e - 4 pairs of wires<br>2) Coaxial - inner wire surrounded by conducting shield<br>3) Fiber-Optic - glass or plastic wire diameter of hair', tag: 0 },
      { q: 'Frequencies of wifi, bluetooth and cordless phone', a: '1) wifi - 2.4 and 5GHz<br>2) blutooth - 2.4GHz<br>3) phone - 900MHz', tag: 0 },
      { q: 'What wireless router configuration would stop outsiders from using your home network', a: 'Encription', tag: 0 },
      { q: 'OSI model', a: '7) Application<br>6) Presentation<br>5) Session<br>4) Transport<br>3) Network <br>2) Data Link <br>1) Physical', tag: 0 },
      { q: 'TCP/IP model', a: '4) Application<br>3)Transport<br>2) Internet<br> 1) Network Access', tag: 0 },
      { q: 'Three types of cables - name and explain', a: '1) Twisted pair - 4 pairs of copper wires<br>2) Coaxial cable - single copper wire in insulation and metal shielding<br> 3)Fiber-optic cable - glass or plastic wire', tag: 0 },
    ],
    module8_12: [
      { q: 'Private addresses', a: '1) 10.0.0.0/8<br>2) 172.16.0.0/12<br>3) 192.168.0.0/16', tag: 0 },
      { q: 'Special addresses', a: '1) Loopback address - 127.0.0.1<br>2) Link-Local addresses - 169.254.0.1 to 169.254.255.254', tag: 0 },
      { q: 'Who manages assignment of ip addresses?', a: 'IANA - Internet Assigned Numbers Authority', tag: 0 },
      { q: 'Which org is responsible for allocating IP addresses to ISPs?', a: 'RIR - Regional Internet Registries', tag: 0 },
      { q: 'What is the range for multicast?', a: '224.0.0.0 to 239.255.25.255', tag: 0 },
      { q: 'Three migration techniques from IPv4 to IPv6', a: '1) Dual Stack<br>2) Tunneling<br>3) Translation', tag: 0 },
      { q: 'Composition of IPv6', a: '8 hextets of hexidecimal digits (0 to f)', tag: 0 },
      { q: 'Four steps in assigning ip address using DHCP', a: '1) Discover from client - multicast with 255.255.255.255 and FF-FF-FF-FF-FF-FF<br>2) Offer from server<br>3) Request from client<br>4) Acknowledgment from server', tag: 0 },
      { q: '', a: '', tag: 0 },
    ],
    module13_17: [
      { q: 'What is ARP and ND?', a: 'Address Resolution Protocol<br>Netowrk Discovery', tag: 0 },
      { q: 'What is broadcast MAC address?', a: 'FF:FF:FF:FF:FF:FF', tag: 0 },
      { q: 'Three steps of ARP process', a: '1) Host sends request with ip address to broadcast MAC address<br>2) Host with matching ip sends back its MAC address<br>3) Sending host receives and stores MAC address in ARP table', tag: 0 },
      { q: 'Which table does a router use to determine which interface to use to send packets to the destination network?', a: 'Routing table', tag: 0 },
      { q: 'Which information is used by routers to forward a data packet toward its destination?', a: 'DEstination ip address', tag: 0 },
      { q: 'What is NAT? What is it used for?', a: 'Network Address Translation<br>Its mapping one IP address (private) to another IP address (public)', tag: 0 },
      { q: 'Wht does UDP stand for?', a: 'User Datagram Protocol', tag: 0 },
      { q: 'Three types of ports', a: '1) Well-known ports: 1-1023<br>2) Registered ports: 1024-49151 <br>3) Private ports: 49152-65535', tag: 0 },
      { q: 'Well-known ports', a: 'FTP - 20,21<br>Secure Shell(SSH) - 22<br>Simple Mail Transfer Protocol (SMTP) - 25<br>DNS - 53, DHCP - 67,68<br>HTTP/HTTPS - 80/443<br>Post Office Protocol v3 (POP3) - 110', tag: 0 },
      { q: '', a: '', tag: 0 },
    ],
};

export default Questions;
