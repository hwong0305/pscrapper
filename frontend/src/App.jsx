import { Button, Form, Image, Input } from 'antd';
import { useState } from 'react';
import './App.css';

function App() {
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const onSubmit = e => {
    fetch('http://localhost:3000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ json: e.json }),
    })
      .then(r => r.json())
      .then(({ imgSrc, videoSrc }) => {
        setImages(
          imgSrc.map(url => {
            const newUrl = url.replace(/ig_cache_key=.+?&/, '&');
            const uri = new URL(newUrl);
            return uri.pathname + '?' + uri.searchParams;
          })
        );
        setVideos(
          videoSrc.map(video => {
            const vidUrl = video.replace(/ig_cache_key=.+?&/, '&');
            const uri = new URL(vidUrl);
            return uri.pathname + '?' + uri.searchParams;
          })
        );
      });
  };

  return (
    <>
      <Form onFinish={e => onSubmit(e)}>
        <Form.Item name="json" label="JSON" rules={[{ message: 'Please input json' }]}>
          <Input.TextArea showCount />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Download
          </Button>
        </Form.Item>
      </Form>

      {/* <List
        dataSource={images}
        renderItem={item => (
          <List.Item>
            <a href={item}>Img</a>
          </List.Item>
        )}
      /> */}
      {/* <List
        dataSource={videos}
        renderItem={item => (
          <List.Item>
            <a href={item}>Video</a>
          </List.Item>
        )}
      /> */}
      {images.map((img, i) => (
        <Image src={img} key={i} width={400} />
      ))}
      {videos.map((vid, i) => (
        <video controls width="400" key={i}>
          <source src={vid} type="video/mp4" />
        </video>
      ))}
    </>
  );
}

export default App;
