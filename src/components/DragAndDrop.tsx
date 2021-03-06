// @flow 
import * as React from 'react';
import { useState, useEffect } from 'react';

interface DragAndDropProps {
  handleDrop: (e: any) => void;
}

export const DragAndDrop = (props: DragAndDropProps) => {
  const [drag, setDrag] = useState<boolean>(false);
  const dropRef = React.createRef<HTMLDivElement>();

  let dragCounter = 0;
  const handleDrag = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
  }
  const handleDragIn = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    dragCounter++
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setDrag(true)
    }
  }
  const handleDragOut = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    dragCounter--
    if (dragCounter === 0) {
      setDrag(false)
    }
  }
  const handleDrop = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    setDrag(false)
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      props.handleDrop(e.dataTransfer.files)
      e.dataTransfer.clearData()
      dragCounter = 0
    }
  }

  useEffect(() => {
    let div = dropRef.current
    div?.addEventListener('dragenter', handleDragIn)
    div?.addEventListener('dragleave', handleDragOut)
    div?.addEventListener('dragover', handleDrag)
    div?.addEventListener('drop', handleDrop)
    return () => {
      div?.removeEventListener('dragenter', handleDragIn)
      div?.removeEventListener('dragleave', handleDragOut)
      div?.removeEventListener('dragover', handleDrag)
      div?.removeEventListener('drop', handleDrop)
    }
  })

  return (
    <div
        style={{display: 'inline-block', position: 'relative'}}
        ref={dropRef}
      >
        { drag &&
          <div 
            style={{
              border: 'dashed grey 4px',
              backgroundColor: 'rgba(255,255,255,.8)',
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0, 
              right: 0,
              zIndex: 9999
            }}
          >
            <div 
              style={{
                position: 'absolute',
                top: '50%',
                right: 0,
                left: 0,
                textAlign: 'center',
                color: 'grey',
                fontSize: 36
              }}
            >
              <div>drop here :</div>
            </div>
          </div>
        }
      </div>
  );
};



//     state = {
//       drag: false
//     }
//     dropRef = React.createRef<HTMLDivElement>()
//     handleDrag = (e: any) => {
//       e.preventDefault()
//       e.stopPropagation()
//     }
//     handleDragIn = (e: any) => {
//       e.preventDefault()
//       e.stopPropagation()
//       dragCounter++
//       if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
//         setState({drag: true})
//       }
//     }
//     handleDragOut = (e: any) => {
//       e.preventDefault()
//       e.stopPropagation()
//       dragCounter--
//       if  dragCounter === 0) {
//         setState({drag: false})
//       }
//     }
//     handleDrop = (e: any) => {
//       e.preventDefault()
//       e.stopPropagation()
//       setState({drag: false})
//       if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
//         props.handleDrop(e.dataTransfer.files)
//         e.dataTransfer.clearData()
//         dragCounter = 0
//       }
//     }
//     dragCounter: any

//     useEffect() {

//     }

//     componentDidMount() {
//       let div = dropRef.current
//       div?.addEventListener('dragenter', handleDragIn)
//       div?.addEventListener('dragleave', handleDragOut)
//       div?.addEventListener('dragover', handleDrag)
//       div?.addEventListener('drop', handleDrop)
//     }
//     componentWillUnmount() {
//       let div = dropRef.current
//       div?.removeEventListener('dragenter', handleDragIn)
//       div?.removeEventListener('dragleave', handleDragOut)
//       div?.removeEventListener('dragover', handleDrag)
//       div?.removeEventListener('drop', handleDrop)
//     }

//     render() {
//         return(<div></div>);
//     }
// }
