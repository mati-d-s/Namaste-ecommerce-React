import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <MDBRow>
          <MDBCol>
            <section className='mb-4'>
              <MDBBtn outline color="light" floating className='m-1' href='https://www.facebook.com' role='button'>
                <img src='https://i.postimg.cc/Kj02DZDM/803124.png' alt='Facebook' style={{ width: '24px', height: '24px' }} />
              </MDBBtn>

              <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <img src='https://i.postimg.cc/m22ShbzG/9843076.png' alt='X' style={{ width: '24px', height: '24px' }} />
              </MDBBtn>

              <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                <MDBIcon fab icon='google' />
              </MDBBtn>
              <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                <MDBIcon fab icon='instagram' />
              </MDBBtn>

              <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                <MDBIcon fab icon='linkedin-in' />
              </MDBBtn>

              <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                <MDBIcon fab icon='github' />
              </MDBBtn>
            </section>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        © 2024 Copyright: 
        <a className='text-white' href='https://mdbootstrap.com/'>
          &nbsp;Namastelectronica.com
        </a>
      </div>
    </MDBFooter>
  );
}
