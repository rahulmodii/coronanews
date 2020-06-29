import React, { useState, useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdLocalHospital } from 'react-icons/md';
import Axios from 'axios';
import Loader from 'react-loader-spinner'
import { WhatsappIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, FacebookShareButton, FacebookIcon } from 'react-share';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get('https://script.googleusercontent.com/macros/echo?user_content_key=sUaClspPmp8yIqa7-YVs-VYqp1a0P6j_3fIwUwXdighNfnN3CnpZ406spQA0WFbP2zwUZ7LjxoTwVDu4Rd3gU9_bjZ6d4yLFm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnGiWWYOmJ9h6lZ_IpSxPc3Mk724--L1TfC1Z-y73voLiJjrPI0e1zFD-zJpYRgYIi4IvOk0K8afJ&lib=MQsFhc4Q4dg8H3KYC4GFNrC8rVciQZiLg').then(res => setData(res.data.user))

  }, []);

  if (!data.length) {
    return <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50%' }}>
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
      />
    </div>

  }
  const shareUrl = 'https://coronanewsbikana.netlify.app/';
  return (

    <div style={{ backgroundColor: 'grey' }}>

      <VerticalTimeline className="vertical-timeline-custom-line">
        {data.map((u, i) => {
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
            <p>
              <WhatsappShareButton
                url={shareUrl}
                title={u.description}>
                <WhatsappIcon
                  size={32}
                  round />
              </WhatsappShareButton>
              <FacebookShareButton url={shareUrl}
                title={u.description} >
                <FacebookIcon size={32} round />
              </FacebookShareButton>
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
