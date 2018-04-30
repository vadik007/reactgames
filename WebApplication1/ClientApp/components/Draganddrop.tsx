import * as React from 'react';
//import React,{Component} from 'react'
//import Nav from '../Nav'

const styles = {
  left : {
    width: '250px',
    height: '150px',
    border: '1px solid #DCDCDC',
    float: 'left'
  },
  right : {
    width: '250px',
    height: '150px',
    border: '1px solid #DCDCDC',
    float: 'left',
    marginLeft: '40px'
  },
  droppable : {
    margin: '0 auto',
    width: '50%',
    marginTop: '80px'
  },
  para : {
    marginRight: '11px',
    border: '1px solid #DCDCDC',
    padding: '12px 16px',
    borderRadius: '50%',
    width: '15px',
    float : 'left'
  }
};

export class DragDrop extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
          items : [
            { no : 1, text : "This is text 1" },
            { no : 2, text : "This is text 2" },
            { no : 3, text : "This is text 3" },
            { no : 4, text : "This is text 4" }
          ],
          rightContainer : [],
          leftContainer : []
        };
    }

    onDragStart(e: any, v: any){
        e.dataTransfer.dropEffect = "move";
        e.dataTransfer.setData( "text/plain", v );
    };

    allowDrop = (ev: any) =>{
        ev.preventDefault();
    };

    onDropLeft = (e: any) =>{
        e.preventDefault();
        const data = e.dataTransfer.getData("text/plain");
        let {leftContainer} = this.state;
        leftContainer.push(data);
        this.setState({ leftContainer });
    };

    onDropRight = (e: any) =>{
        e.preventDefault();
        const data = e.dataTransfer.getData("text/plain");
        let {rightContainer} = this.state;
        rightContainer.push(data);
        this.setState(({ rightContainer }) as any);
    };

    render() {
        const {items, leftContainer, rightContainer} = this.state;

        return(
          <div>
              <div style={{ marginTop: '35px' }}>
                  Draggable texts : <br/>

                  <div style={{ display : 'inline-block' }}>
                      {items.map((item) => {
                            return <p style={styles.para} draggable={true}
                              onDragStart={(e: any) => this.onDragStart(e,
                              item.text) }>{item.no}</p>;
                      }) }
                  </div>

              </div>

              <div style={styles.droppable}>
                  <div style={styles.left} onDragOver={this.allowDrop} onDrop={this.onDropLeft}>
                      Left Container
                      { leftContainer.map(itm => {
                          return <p>{itm}</p>;
                      }) }
                  </div>
                  <div style={styles.right} onDragOver={this.allowDrop} onDrop={this.onDropRight}>
                      Right Container
                      { rightContainer.map(itm => {
                          return <p>{itm}</p>;
                      }) }
                  </div>
              </div>
          </div>
        );
    }

    state: { items: { no: number;text: string }[];rightContainer: object[];leftContainer: object[] };

    //setState(p: { leftContainer: object[] }): any { throw new Error("Not implemented"); }
}

export default DragDrop;