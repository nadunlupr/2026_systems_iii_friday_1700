import { BrowserRouter, Routes, Route } from 'react-router';
import App from './App';
import { Counter } from './state-demo/counter';
import UseEffectDemo from './use-effect-demo/use-effect-demo';

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/counter" element={<Counter/>} />
                <Route path="/use-effect-demo" element={<UseEffectDemo />} />
            </Routes>
        </BrowserRouter>
    )
}