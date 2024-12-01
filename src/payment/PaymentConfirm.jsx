import wallet from '../static/img/6aef1ae7-059c-4d1e-9c6e-37584c0ffd49.png'

const PaymentConfirm = () => {
    return (
        <div className='w-full text-center'>
             <div className='flex justify-center'>
             <img src={wallet} alt="" />
             </div>
            <h6 className='text-[#444444]'>Payment Success!</h6>
            <p>The system is waiting for  the ticket</p>
            <button className='bg-primary text-white px-4 py-1 my-2 rounded-md'>Check Your Ticket</button>
        </div>
    );
};

export default PaymentConfirm;