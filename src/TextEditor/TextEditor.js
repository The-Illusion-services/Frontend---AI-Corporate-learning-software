import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export function TextEditor() {
  const [value, setValue] = useState('');
  useEffect(()=>{
    console.log(value)
  }, [value])

  return <ReactQuill theme="snow" value={value} onChange={setValue} />;
}