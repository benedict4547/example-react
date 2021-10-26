import React from "react";
import { Modal, ModalOverlay, ModalContent, Heading } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { ENUM_STATUS, genericAction, UPDATE_TODO } from "../redux/actions";
import { todosSelector } from "../redux/selector";
import { FormEditTodo } from "../components/FormEditTodo";

export function ModalEdit({ onClose, isOpen, dataInit }) {
  const dispatch = useDispatch();
  const { loadingUpdate } = useSelector(todosSelector);
  const handleEditTodo = (data) => {
    dispatch(genericAction(UPDATE_TODO, ENUM_STATUS.FETCHING, data));
  };
  return (
    <Modal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent>
        <Heading
          className="py-5 text-center"
          as="h2"
          bgClip="text"
          bgGradient="linear(to-r, teal.500, green.500)"
          size="md"
        >
          Edit Todo
        </Heading>
        <FormEditTodo dataInit={dataInit} onClose={onClose} />
      </ModalContent>
    </Modal>
  );
}