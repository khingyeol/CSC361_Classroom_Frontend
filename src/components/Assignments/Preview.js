export const Preview = ({files}) => {
    if (!files.length) {
        return null
    }
    
    const file_div = files.map((file,index) => 
            <div key={index} > {file}
            </div>
    );

    return (
        <div>
            <h4 className="text-green">
                <label className="">Turned in :</label> 
            </h4>
            {file_div}
        </div>
    )
    // return files.map((file) => 
    //     <div> {file}
    // {/* <img style={{maxWidth: '200px'}} src={`%PUBLIC_URL%/${file.filename}`} alt={file.originalname}/> */}
    // </div>

};