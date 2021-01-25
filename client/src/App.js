import mountainImg from './assets/img/image.svg';

const fileTypeAdmitted = ['image/jpeg', 'image/jpg', 'image/png'];

function App() {
  const dragEnterHandler = (e) => {
    e.preventDefault();
  };

  const dragOverHandler = (e) => {
    e.preventDefault();
  };
  const dragLeaveHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const dropHandler = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (fileTypeAdmitted.includes(file.type)) {
      console.log({ file });
    }
    return;
  };

  return (
    <div className='uploader'>
      <h1 className='uploader__title'>Upload your image</h1>
      <p className='uploader__subtitle'>File should be Jpeg, Png or Jpg...</p>
      <div
        className='uploader__draggable'
        onDragEnter={(e) => dragEnterHandler(e)}
        onDragOver={(e) => dragOverHandler(e)}
        onDragLeave={(e) => dragLeaveHandler(e)}
        onDrop={(e) => dropHandler(e)}
      >
        <div className='uploader__draggable-img'>
          <img src={mountainImg} alt='mountain-img' />
        </div>
        <p className='uploader__draggable-info'>Drag & Drop your image here</p>
      </div>
      <small>Or</small>
      <button>Choose a file</button>
    </div>
  );
}

export default App;
