import * as React from "react";
import { GestureResponderEvent, Text } from "react-native";
import { Button, Dialog, Portal } from "react-native-paper";
import style from "./style";

export interface DialogConfirmProps {
  visible: boolean;
  title: string;
  content?: string | undefined;
  error?: string | undefined;
  onPressCancel?: (e: GestureResponderEvent) => void;
  onPressOk?: (e: GestureResponderEvent) => void;
}

export default function DialogConfirm(props: DialogConfirmProps) {
  return (
    <Portal>
      <Dialog visible={props.visible}>
        <Dialog.Title>{props.title}</Dialog.Title>
        {props.content && (
          <Dialog.Content>
            <Text>{props.content}</Text>
            {props.error && <Text style={style.alert}>{props.error}</Text>}
          </Dialog.Content>
        )}
        <Dialog.Actions>
          {props.onPressCancel && (
            <Button onPress={props.onPressCancel}>Cancelar</Button>
          )}
          {props.onPressOk && <Button onPress={props.onPressOk}>Ok</Button>}
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}
