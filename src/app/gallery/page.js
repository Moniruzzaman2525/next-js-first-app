import Image from "next/image";


const GalleryPage = () => {
    return (
        <div className="text-center">
            <h1>Regular image tag</h1>
            <img width={500} height={500} className="mx-auto" src="https://consultantsinabox.com/cdn/shop/files/2061ae24cb66e096cc069a26f0c1822a_800x.png?v=1715463267" alt="" />
            <h1>Nextjs image Component</h1>
            <Image width={500} className="mx-auto" height={500} src='https://consultantsinabox.com/cdn/shop/files/2061ae24cb66e096cc069a26f0c1822a_800x.png?v=1715463267' alt="next image" />
        </div>
    );
};

export default GalleryPage;
