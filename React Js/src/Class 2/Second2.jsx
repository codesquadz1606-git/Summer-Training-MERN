import { useState } from "react"

export default function Second2(){
    const[status,setStatus]=useState(true)
    function updateStatus(){
        setStatus(!status);
    }
    console.log(status)
    return(
        <>
            {/* agar status true h tabhi para is visible , otherwise it will get hide.  */}
            {status && <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, dignissimos? Necessitatibus sunt doloribus ipsa, eius repudiandae blanditiis velit adipisci alias mollitia repellendus eligendi provident! Accusantium, ad officia cumque quaerat dolorem non vitae, sed tempore, eveniet blanditiis nesciunt! Dolore, ab. Voluptates amet praesentium omnis minima unde, consectetur numquam sequi, distinctio a qui corporis porro veniam saepe. Est maxime fugiat vitae corporis atque numquam, soluta at, maiores repudiandae cumque aliquid perspiciatis odit, quibusdam nesciunt non neque eaque quam? Dolorem, eius. Cumque consequatur repudiandae eius quo modi! Aliquid fugit libero, quod quaerat dolore, magnam incidunt non nemo doloremque corporis saepe, dolorem odit placeat alias possimus quo? Magnam debitis velit dignissimos dolorum perferendis esse dolores minima ut consequatur eum. Mollitia quibusdam veniam aliquid placeat voluptates praesentium commodi tempora nisi distinctio, velit sit atque impedit quisquam provident molestiae. Cum temporibus reiciendis nemo porro maxime quas excepturi atque id amet ipsa dolorum explicabo expedita quisquam, assumenda eaque inventore saepe veritatis repellat maiores ullam unde impedit eius est necessitatibus. Debitis distinctio voluptatum fuga, eos quidem nisi exercitationem consequatur optio, libero atque quod illo praesentium natus ipsam maiores qui sint veniam eum non, nemo quae? Ipsa veritatis debitis consequatur quibusdam dolore possimus voluptatem voluptates unde perspiciatis. Voluptatum officiis vel possimus adipisci obcaecati ad esse fuga quam sunt mollitia, delectus iste nisi minus debitis nam velit consequatur praesentium nemo perspiciatis voluptatem tenetur distinctio provident? Laboriosam fugit rerum nostrum perferendis animi veniam, sunt quasi a, quas, voluptates consequuntur nisi exercitationem natus quos fuga amet? Modi deserunt iste rerum delectus excepturi tempore laboriosam quibusdam inventore quisquam vero qui facere atque unde hic, eaque sint quas assumenda repudiandae optio corrupti voluptates ut nam ullam nihil? Maiores tempore nemo odit nulla a illo! Cum voluptatem omnis aliquam corporis rem, placeat doloremque saepe excepturi repellat non minus fugit dolorum hic porro magni alias dicta.
            </p>}

            {/* 
                true : Hide Para
                false : Show para
            */}
            <button onClick={updateStatus}>
                {
                    (status)?
                    "Hide Para" :
                    "Show Para"
                }
            </button>
        </>
    )
}