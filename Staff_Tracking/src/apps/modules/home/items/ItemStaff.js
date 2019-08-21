import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import {
    ItemPerson,
    NameStaff,
    ItemChoice,
    CircleSelect
} from './styles'


export default class ItemStaff extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <TouchableOpacity onPress={() => this.props.handleSelected(this.props.item)}>
                <ItemPerson>
                    <NameStaff>{this.props.item.last_name + ' ' + this.props.item.first_name}</NameStaff>
                    <ItemChoice>
                        {
                            this.props.selectedIndex === this.props.item.id ? <CircleSelect /> : null
                        }
                    </ItemChoice>
                </ItemPerson>
            </TouchableOpacity>
        );
    }
}

