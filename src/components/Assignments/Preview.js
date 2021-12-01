export const Preview = ({files}) => {
    if (!files.length) {
        return null
    }

    return files.map((file) => 
        <div> ee{file.filename+' '+file}
    <img style={{maxWidth: '200px'}} src={`%PUBLIC_URL%/${file.filename}`} alt={file.originalname}/>
    </div>

    );
};