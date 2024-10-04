import React, { useState } from "react";
import { Button, FloatButton, message, Modal } from "antd";
import "./BidModal.css";

import Input from "../Input/Input";
import { auth, db } from "../../utils/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const BidModal = ({ isModalOpen, onClose, title, price, ProductId, onBid }) => {
  const [bidPrice, setPrice] = useState(price);
  const [loading, setLoading] = useState(false);

  const handleModalBid = async () => {
    try {
      setLoading(true);
      const bidObj = {
        ProductId,
        userId: auth.currentUser.uid,
        bidPrice,
        status: "pending",
        createdAt: serverTimestamp(),
      };
      const bidCollectionRef = collection(db, "bids");
      await addDoc(bidCollectionRef, bidObj);
      message.success("Bid placed successfully");
      setLoading(false);
      onClose();
    } catch (error) {
      message.error("Error while adding bid");
      console.log("error=>", error);

      setLoading(false);
    }
  };

  return (
    <Modal
      title="Bid Modal"
      footer={false}
      onCancel={onClose}
      open={isModalOpen}
    >
      <div className="bid-name">
        <div>{title}</div>
        <div>Min Price: {price}</div>
      </div>

      <Input
        placeholder="Bid Price"
        value={bidPrice}
        type="number"
        onChange={(e) => setPrice(e.target.value)}
      />
      <div className="modal-content">
        <Button
          onClick={handleModalBid}
          loading={loading}
          disabled={bidPrice <= price}
          className="bid-now"
        >
          Bid Now
        </Button>

        
      </div>
    </Modal>
  );
};
export default BidModal;
