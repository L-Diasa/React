export default function InfoField({ title, content}) {
    return (
        <div>
            <p className='info-title'>{title}</p>
            <p className='info-content'>{content}</p>
        </div>
    );
}
