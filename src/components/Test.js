import React from 'react';
import Modal from 'react-bootstrap/Modal';
import CSS from '../css/index.css';

const Test = () => {
    const [open, setOpen] = useState(false);
        return (

              <>
                <Button
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                >
                  click
                </Button>
                <Collapse in={open}>
                  <div id="example-collapse-text">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                    terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                    labore wes anderson cred nesciunt sapiente ea proident.
                  </div>
                </Collapse>
              </>

         );
    }
          
   

        

export default Test