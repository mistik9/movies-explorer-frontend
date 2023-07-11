import './Response.css';

function Response({ responseMessage }) {
  return (
    <section className='response'>
      <div className='response__message'>{responseMessage}</div>
    </section>
  );
};

export default Response;