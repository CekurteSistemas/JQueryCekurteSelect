/*
 * Cekurte Select - DEMO
 *
 * https://github.com/CekurteSistemas/JQueryCekurteSelect
 *
 * Um plugin jQuery para transformar um select em um componente
 * mais atraente.
 * 
 * @author: João Paulo Cercal <sistemas@cekurte.com>
 * @version: 1.0
 */

jQuery(document).ready(function($){
    
    $('#select1').cekurteSelect();
    
    $('#select2').cekurteSelect({
        'ckSelectorClass'       : 'btn btn-primary',
        'ckToogleClass'         : 'btn btn-primary dropdown-toggle'
    });
    
    $('#select3').cekurteSelect({
        'ckSelectorClass'       : 'btn btn-info',
        'ckToogleClass'         : 'btn btn-info dropdown-toggle'
    });
    
    $('#select4').cekurteSelect({
        'ckSelectorClass'       : 'btn btn-success',
        'ckToogleClass'         : 'btn btn-success dropdown-toggle'
    });
    
    $('#select5').cekurteSelect({
        'ckSelectorClass'       : 'btn btn-warning',
        'ckToogleClass'         : 'btn btn-warning dropdown-toggle'
    });
    
    $('#select6').cekurteSelect({
        'ckSelectorClass'       : 'btn btn-danger',
        'ckToogleClass'         : 'btn btn-danger dropdown-toggle'
    });
    
    $('#select7').cekurteSelect({
        'ckSelectorClass'       : 'btn btn-inverse',
        'ckToogleClass'         : 'btn btn-inverse dropdown-toggle'
    });
    
    $('#select-custom').cekurteSelect({
        'twitterBootstrap'      : false,
        'ckSelectClass'         : 'selectCustom1'
    });
    
    $('#select1, #select2, #select3, #select4, #select5, #select6, #select7, #select-custom')
        .on('beforeInit', function() {
            console.info('beforeInit');
        })
        .on('afterInit', function() {
            console.info('afterInit');
        })
        .on('beforeOpenSelect', function() {
            console.info('beforeOpenSelect');
        })
        .on('afterOpenSelect', function() {
            console.info('afterOpenSelect');
        })
        .on('beforeChangeSelect', function() {
            console.info('beforeChangeSelect');
        })
        .on('afterChangeSelect', function() {
            console.info('afterChangeSelect');
            console.log($(this).val());
        })
        .on('beforeCloseSelect', function() {
            console.info('beforeCloseSelect');
        })
        .on('afterCloseSelect', function() {
            console.info('afterCloseSelect');
        })
    ;
});