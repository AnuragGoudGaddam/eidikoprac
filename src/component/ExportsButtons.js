import React from 'react';

function ExportsButtons() {
    return (
        <div class="col ml-auto" align="right" style={{marginTop:5}}>
            <button style={{backgroundColor:'#254a9e', borderColor:'#254a9e'}}  type="button" class="btn btn-primary btn-sm"><i class="fa fa-download" aria-hidden="true"></i>{' '}PDF</button>{' '}
            <button style={{backgroundColor:'#254a9e', borderColor:'#254a9e'}} type="button" class="btn btn-primary btn-sm">
                <i class="fa fa-download" aria-hidden="true"></i>{' '}Excel</button>
        </div>
    )
}

export default ExportsButtons
