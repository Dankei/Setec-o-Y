//  Importacao dos modulos e componentes necessarios
import NewYeet from "../../components/NewYeet.js";
import { motion } from 'framer-motion';

function HomePage() {
    // Adicionar o useState

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col h-full  w-full border-solid border-gray-600 border-x-[1px]"
        >
            <div className="flex py-5 text-xl font-thin text-white justify-evenly">
                <p className="text-white">Todos</p>
                <p className="text-white">Seguindo</p>
            </div>
            <NewYeet />
             {/*
                Adicionar a lista de yeets
             */}
        </motion.div >
    );
}

export default HomePage;