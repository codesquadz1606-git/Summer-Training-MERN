import {useForm} from 'react-hook-form'

export default function Third(){
    const{
        register, // handles the input data & also used for validation.
        handleSubmit, // handle the onSubmit on the form (preventDefault)
        reset, // resets the input data
        formState:{errors} // find out the errors of the form.
    }=useForm() // It is package

    function formData(data){
        console.log(data)
        reset() // input field ko reset kardegaa.
    }
    return(
        <>
            <form onSubmit={handleSubmit(formData)}>
                <label htmlFor="">Name :</label>
                <input type="text" placeholder='Enter Your name' 
                {...register("fullname")} // Handling the input field.
                />
                <br />
                <label htmlFor="">Email :</label>
                <input type="email" placeholder='Enter your Email'
                {...register("email")}
                />
                <br />
                <label htmlFor="">Mobile No :</label>
                <input type="tel" placeholder='ENeter Your Mobile No' 
                {...register("mobile_no")}
                />
                <br />
                <input type="submit" />
            </form>
        </>
    )
}