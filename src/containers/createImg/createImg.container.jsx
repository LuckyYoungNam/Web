import CreateImgUI from "./createImg.presenter";
import { useState } from "react";
const CreateImgPage= () => {
    const [image, setImage] = useState(null); // 이미지 상태 관리

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
        }
    };
    return(
        <CreateImgUI image={image} handleImageUpload={handleImageUpload}></CreateImgUI>
    )
}
export default CreateImgPage;
