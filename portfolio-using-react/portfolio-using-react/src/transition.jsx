import { motion } from 'framer-motion'

const transition = (OgComponent) => {
    const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible
    };
    return () => (
        <>
            <OgComponent />
            <motion.div 
                className='fade-in'
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, transition: { duration: 1 } }}
                variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
            >
            </motion.div>
            <motion.div 
                className='fade-out'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 1 } }}
                variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
            >
            </motion.div>
        </>
    )
}

export default transition;