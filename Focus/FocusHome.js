import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {Colors, FHContainer, FHeaderView, FTextView, FocusHeaderText, FocusBodyText, Leaf} from '/Users/anyakathpalia/Desktop/MSB/temp/styles'

export default function FocusHome() {
    return (
        <FHContainer>
            <Leaf resizeMode='cover' source={require('/Users/anyakathpalia/Desktop/MSB/temp/FocusImg/leaf.png')} />
            <FHeaderView>
                <FocusHeaderText>
                    Focus
                </FocusHeaderText>
                <FocusBodyText >
                {"\n"}Use the this section of the My Success Bits app to increase your productivity by having focus  sessions wherein you work for the duration of the session and get notified when your session ends! {"\n"} {"\n"}Try and work without any distractions and give yourself a small reward each time you end a focus session! {"\n"} {"\n"}So find yourelf a silent space, get yourself some tea or coffee and get working!  
                </FocusBodyText>
            </FHeaderView>
        </FHContainer>
    )
}