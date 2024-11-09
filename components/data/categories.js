
import DollarIcon from "../svg-icons/DollarIcon";
import SwitchIcon from "../svg-icons/SwitchIcon";
import DevicesIcon from "../svg-icons/DevicesIcon";
import MobileIcon from "../svg-icons/MobileIcon";
import LockIcon from "../svg-icons/LockIcon";
import MeterIcon from "../svg-icons/MeterIcon";
import ServerIcon from "../svg-icons/ServerIcon";

const categories = [
    {
       title: "ExpressVPN",
       image: "/image/expressvpn-logo.webp",
       sub_content: "OVER 7000 PEOPLE CHECKED OUT EXPRESSVPN IN THE LAST MONTH",
       mobile_image: "/image/expressvpn.webp",
       description: (
          <>
             <span className="pb-3">ExpressVPN, which is currently offering a <strong>30-day free trial,</strong> is the ultimate choice for high-speed browsing. With its miliraty-grade encryption, you can rest assured that your internet activity will always remain private. </span> <br/>
          </>
       ),
       bestSeller: "yes",
       amenities : [
          {
             icon:  <DollarIcon />,
             title: "Money Back Guarantee",
             label: "30 days",
          },
          {
             icon:   <ServerIcon /> ,
             title: "Servers / Countries",
             label: "3000 Servers in 105 Countries",
          },
          {
             icon: <SwitchIcon width="16" height="16"  />,
             title: "Kill Switch",
             label: "Yes",
          },
          {
             icon: <DevicesIcon />,
             title: "Device / License",
             label: "8",
          },
          {
             icon: <MobileIcon />,
             title: "Mobile",
             label: "iOs, Android",
          },
       ],
       bestVPN: [
          {
             icon: <LockIcon />,
             label: "Privacy",
          },
          {
             icon: <MeterIcon />,
             label: "Speed",
          },
       ],
       price: "6.67",
       url: "https://www.expressvpn.com/",
    },
    {
       title: "Cyber Ghost VPN",
       image: "/image/cyber-image.webp",
       mobile_image: "/image/cyber-small.webp",
       description: "Thanks to a brilliant interface and lots of handly feautres, this VPN will make even the pickiest users happy. For desktop or mobile, Windows, Mac, or Linux, if you want to securely enjoy private browsing. CyberGhost is consistently impressive.",
       amenities : [
          {
             icon: <DollarIcon />,
             title: "Money Back Guarantee",
             label: "30 days",
          },
          {
             icon:   <ServerIcon /> ,
             title: "Servers / Countries",
             label: "11690 Servers in 100 Countries",
          },
          {
             icon: <SwitchIcon width="16" height="16"  />,
             title: "Kill Switch",
             label: "Yes",
          },
          {
             icon: <DevicesIcon />,
             title: "Device / License",
             label: "7",
          },
          {
             icon: <MobileIcon />,
             title: "Mobile",
             label: "iOs, Android",
          },
       ],
       bestVPN: [
          {
             icon: <LockIcon />,
             label: "Privacy",
          },
          {
             icon: <MeterIcon />,
             label: "Speed",
          },
       ],
       price: "7.67",
       url: "https://www.cyberghostvpn.com/",
    },
    {
       title: "NordVPN",
       image: "/image/Logo-NordVPN.webp",
       mobile_image: "/image/nord-smallv2.webp",
       description: "NordVPN offers decent value for money. Get a fast, secure, and affordable VPN with good global coverage.",
       amenities : [
          {
             icon: <DollarIcon />,
             title: "Money Back Guarantee",
             label: "30 days",
          },
          {
             icon:   <ServerIcon /> ,
             title: "Servers / Countries",
             label: "6293 Servers in 111 Countries",
          },
          {
             icon: <SwitchIcon width="16" height="16"  />,
             title: "Kill Switch",
             label: "Yes",
          },
          {
             icon: <DevicesIcon />,
             title: "Device / License",
             label: "10",
          },
          {
             icon: <MobileIcon />,
             title: "Mobile",
             label: "iOs, Android",
          },
       ],
       bestVPN: [
          {
             icon: <LockIcon />,
             label: "Privacy",
          },
          {
             icon: <MeterIcon />,
             label: "Speed",
          },
       ],
       price: "8.67",
       url: "https://www.nordvpn.com/",
    },
]

export default categories