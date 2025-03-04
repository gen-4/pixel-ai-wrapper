'use client'

import Form from 'next/form';
import styles from "@/page.module.css";

import { generatePixelArt } from '@/actions/generation';


const Home = () => {
    return (
        <div className={ styles.page }>
            <main className={ styles.main }>
                <h2 className={ styles.title }>Start generating</h2>
                <Form className={ 'form ' + styles.form } action={ generatePixelArt }>
                    <div className={ styles.canvasInput }>
                        <label>Canvas size</label>
                        <input type='number' min='1' name='xSize' />
                        <span>x</span>
                        <input type='number' min='1' name='ySize' />
                    </div>
                    <textarea name='prompt' className={ styles.prompt } placeholder='Write how your asset should be'></textarea>
                    <div className={ styles.submitWrapper }><button className='form-button' type="submit">Generate</button></div>
                </Form>
            </main>
        </div>
    );
}

export default Home;
