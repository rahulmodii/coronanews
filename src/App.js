import React,{useState} from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdLocalHospital } from 'react-icons/md';
import Axios from 'axios';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
function App() {
  const [data, setData] = useState([]);
  Axios.get('https://script.googleusercontent.com/macros/echo?user_content_key=iKtuOuUa3HpRNT29EU158-zDONmfGbj1oxMiNzMqeVmayEnkjBrhgmsOOQsoh32jBArpLUYqvFJrwvmCIdlNho0cMSo1UCxtm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnGiWWYOmJ9h6lZ_IpSxPc3Mk724--L1TfC1Z-y73voLiJjrPI0e1zFD-zJpYRgYIi4IvOk0K8afJ&lib=MQsFhc4Q4dg8H3KYC4GFNrC8rVciQZiLg').then(res=>setData(res.data.user))
  

  if (!data.length) {
  return  <div style={{position:'fixed',top:'50%',left:'50%' ,marginTop: '-50px',marginLeft: '-100px'}} >
      <Loader
         type="Puff"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000} //3 secs
 
      />
  </div>

  }
  return (
    
    <div style={{ backgroundColor: 'grey' }}>
      <VerticalTimeline className="vertical-timeline-custom-line">
        {data.map((u,i)=>{
             return <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                  date={u.date}
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  icon={<MdLocalHospital />}
                  key={i}
                >
                  <h3 className="vertical-timeline-element-title">Corona News</h3>
                  <img src={u.image} alt="Logo" width='100%' />
                  <p>
                   {u.description}
                  </p>
                </VerticalTimelineElement>
        })}


        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<MdLocalHospital />}
        />
      </VerticalTimeline>
    </div>

  );
}

export default App;
