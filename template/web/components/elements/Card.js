import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '../../lib/sanity/sanity-img-builder';

export default function Card(props) {
    const { image, title, link } = props;
    return (
        <article className="p-2 rounded shadow">
            <div className="w-full mb-2">
                <Image
                    className='rounded'
                    src={urlFor(image).width(200).height(200).auto('format').url()} 
                    width={200} 
                    height={200} 
                    layout="responsive" 
                />
            </div>
            <h3>{title}</h3>
            <Link href={`/blog/${link}`}>
                <button>Read post</button>
            </Link>
        </article>
    )
}
