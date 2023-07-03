import React from 'react';
import { motion } from 'framer-motion';

const OrderConfirmation = () => {
  return (
    <div className='order'>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Order Placed!
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Thank you for your order.
      </motion.p>
    </div>
  );
};

export default OrderConfirmation;
