import { useForm, Watch } from "react-hook-form"

export default function Third1(){
    const{
        register,
        handleSubmit,
        reset,
        watch,
        formState:{errors}
    }=useForm()

    function Data(data){
        console.log(data)
    };
    return(
        <>
            <h1>Registration Form</h1>
            <form onSubmit={handleSubmit(Data)}>

                <label htmlFor="">First Name :</label>
                <input type="text" placeholder="Enter first name"
                {...register("firstName",{
                    required:true,
                    minLength:{
                        value:5,
                        message:"Minimum 5 Character needed"
                    },
                    maxLength:{
                        value:15,
                        message:"Only 15 Characters are allowed"
                    }
                })}
                />
                {
                    errors.firstName && <span>{errors.firstName.message}</span>
                }
                <br />

                <label htmlFor="">Last Name</label>
                <input type="text" placeholder="Enter last name" 
                {...register("lastName",{
                    required:true,
                    minLength:{
                        value:5,
                        message:"Minimum 5 Character needed"
                    },
                    maxLength:{
                        value:15,
                        message:"Only 15 Characters are allowed"
                    }
                })}
                />
                {
                    errors.lastName && <span>{errors.lastName.message}</span>
                }
                <br />
                <label htmlFor="">Email</label>
                <input type="email" placeholder="Enter email" 
                {...register("email",{
                    required:true,
                    pattern:{
                        value:'/^\S+@\S+$i',
                        message:"Invalid Email"
                    }
                })}
                />
                {
                    errors.email && <span>{errors.email.message}</span>
                }
                <br />
                <label htmlFor="">Password</label>
                <input type="password" placeholder="Enter password"
                {...register("password",{
                    required:true,
                    minLength:{
                        value:8,
                        message:"Password Must be atleast 8 Characters"
                    }
                })}
                />
                {
                    errors.password && <span>{errors.password.message}</span>
                }
                <br />
                <label htmlFor="">Confirm Password</label>
                <input type="password" placeholder="Enter Confirm password"
                {...register("Confirm_password",{
                    required:true,
                    validate:(value)=>value===watch("password") || "Password do not match"
                })}
                />
                {
                    errors.Confirm_password && <span>{errors.Confirm_password.message}</span>
                }
                <br />
                <label htmlFor="">Phone No</label>
                <input type="tel" placeholder="Enter Phone No" />
                <br />
                <label htmlFor="">Gender</label>
                <input type="radio" 
                    name="gender"
                    value="Male"
                    {...register("gender"),{
                        required:"Select Gender"
                    }}
                />Male
                <input type="radio" 
                    name="gender"
                    value="Female"
                    {...register("gender")}
                />Female
                <br />
                <label htmlFor="">Date of Birth</label>
                <input type="date" />
                <br />
                <label htmlFor="">Country</label>
                <select name="" id="">
                    <option value="">India</option>
                    <option value="">USA</option>
                    <option value="">Japan</option>
                </select>
                <br />
                <label htmlFor="">Address</label>
                <textarea name="" id=""></textarea>
                <br />
                <label htmlFor="">Skills</label>
                <input type="checkbox" />React
                <input type="checkbox" />Node
                <input type="checkbox" />MongoDb
                <br />
                <label htmlFor="">Profile Image</label>
                <input type="file" />

                <br />
                <input type="submit" />
            </form>
        </>
    )
}