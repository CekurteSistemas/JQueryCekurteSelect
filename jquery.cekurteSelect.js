/*
 * Cekurte Select
 *
 * https://github.com/CekurteSistemas/JQueryCekurteSelect
 *
 * Um plugin jQuery para transformar um select em um componente
 * mais atraente.
 * 
 * @author: João Paulo Cercal <sistemas@cekurte.com>
 * @version: 1.0
 */

$.fn.cekurteSelect = function(userOptions) {

    var elementSelect = this;

    var elementCssClass = {
        'ckSelectContainerClass': 'ckSelectContainer',
        'ckSelectClass'         : 'ckSelect',
        'ckSelectorClass'       : 'ckSelector',
        'ckToogleClass'         : 'ckToogle',
        'ckContainerClass'      : 'ckContainer',
        'ckContainerShowClass'  : 'ckContainerShow',
        'ckContainerHideClass'  : 'ckContainerHide'
    };

    var customElementCssClass = {
        'ckSelectClass'         : 'ckSelectCustom',
        'ckSelectorClass'       : 'ckSelectorCustom',
        'ckToogleClass'         : 'ckToogleCustom',
        'ckContainerClass'      : 'ckContainerCustom'
    };

    var twitterBootstrapElementCssClass = {
        'ckSelectClass'         : 'btn-group',
        'ckSelectorClass'       : 'btn',
        'ckToogleClass'         : 'btn dropdown-toggle',
        'ckContainerClass'      : 'dropdown-menu',
        'ckContainerShowClass'  : 'show',
        'ckContainerHideClass'  : 'hide'
    };

    var debug;

    var twitterBootstrap;

    $(function() {
        
        if (userOptions !== undefined) {
         
            // ---------------------------------------------------------------------
            // Configura a varíavel debug e twitterBootstrap

            debug = userOptions.debug;
            twitterBootstrap = userOptions.twitterBootstrap;

            // ---------------------------------------------------------------------
            // Mescla as classes customizadas de acordo com os parametros do usuário

            delete userOptions.debug;
            delete userOptions.twitterBootstrap;

            $.extend(customElementCssClass, userOptions);
        }

        // ---------------------------------------------------------------------
        // Esconde o Select original

        $(getSelectElement()).css('display', 'none');

        // ---------------------------------------------------------------------
        // Init
        
        $(getSelectElement()).trigger('init');
        
        $(getSelectElement()).on('init', init());
    });
    
    var getElementCssClass = function(elementCssName, withDot, isCustom) {
        
        var element = (isCustom === true) ? customElementCssClass[elementCssName] : elementCssClass[elementCssName]; 
                
        if (withDot === true) {
            return '.' + element.split(' ').join(' .');
        }
        
        return element;
    };
    
    var isDebug = function() {
        return debug === true;
    };
    
    var isTwitterBootstrap = function() {
        return (twitterBootstrap === false) ? false : true;
    };
    
    var getSelectElement = function() {
        return elementSelect;
    };
    
    var getCekurteSelectElement = function() {
        return $(getSelectElement()).prev();
    };
    
    var getCkContainerHideClass = function() {
        return isTwitterBootstrap() ? twitterBootstrapElementCssClass.ckContainerHideClass : getElementCssClass('ckContainerHideClass');
    };
    
    var getCkContainerShowClass = function() {
        return isTwitterBootstrap() ? twitterBootstrapElementCssClass.ckContainerShowClass : getElementCssClass('ckContainerShowClass');
    };
    
    var changeSelect = function() {
        
        // ---------------------------------------------------------------------
        // Register Event: beforeChangeSelect

        $(getSelectElement()).trigger('beforeChangeSelect');

        if (isDebug()) {
            console.info('Executando o evento "changeSelect".');
        }
        
        var ckSelector = $(this).find(getElementCssClass('ckSelectorClass', true));

        var value = $(ckSelector).attr('data-value');

        $(getSelectElement()).val(value);
        
        if (isDebug()) {
            console.info('O evento "changeSelect" foi finalizado.');
        }
        
        // ---------------------------------------------------------------------
        // Register Event: afterChangeSelect

        $(getSelectElement()).trigger('afterChangeSelect');

        return false;
    };
    
    var closeSelect = function(linkOption) {
        
        // ---------------------------------------------------------------------
        // Register Event: beforeCloseSelect

        $(getSelectElement()).trigger('beforeCloseSelect');
        
        if (isDebug()) {
            console.info('Executando o evento "closeSelect".');
        }
        
        var ckSelect = getCekurteSelectElement();

        $(ckSelect).find('ul')
            .addClass(getCkContainerHideClass())
            .removeClass(getCkContainerShowClass())
        ;
        
        var ckSelector = $(ckSelect).find(getElementCssClass('ckSelectorClass', true));
        
        if (linkOption !== undefined) {
            
            $(ckSelector)
                .html($(linkOption).html())
                .attr('data-value', $(linkOption).data('value'))
            ;

            $(ckSelect).trigger('changeSelect');
        }
       
        if (isDebug()) {
            console.info('O evento "closeSelect" foi finalizado.');
        }
        
        // ---------------------------------------------------------------------
        // Register Event: afterCloseSelect

        $(getSelectElement()).trigger('afterCloseSelect');
        
        return false;
    };
    
    var openSelect = function() {
        
        // ---------------------------------------------------------------------
        // Register Event: beforeOpenSelect

        $(getSelectElement()).trigger('beforeOpenSelect');

        if (isDebug()) {
            console.info('Executando o evento "openSelect".');
        }

        $(this).find('ul')
            .removeClass(getCkContainerHideClass())
            .addClass(getCkContainerShowClass())
        ;
        
        if (isDebug()) {
            console.info('O evento "openSelect" foi finalizado.');
        }
        
        // ---------------------------------------------------------------------
        // Register Event: afterOpenSelect

        $(getSelectElement()).trigger('afterOpenSelect');

        return false;
    };
    
    var init = function() {
        
        // ---------------------------------------------------------------------
        // Register Event: beforeInit
        
        $(getSelectElement()).trigger('beforeInit');
        
        if (isDebug()) {
            console.info('Executando o evento "init".');
        }
        
        var options = new Array();

        $(getSelectElement()).find('option').each(function(index, element){
            options.push({
                'value'     : $(element).val(),
                'display'   : $(element).html()
            });
        });

        if (options.length !== 0) {
            
            var containerDiv = $('<div>')
                .attr('id', $(getSelectElement()).attr('id') + '-select')
                .addClass(getElementCssClass('ckSelectClass'))
                .addClass(getElementCssClass('ckSelectClass', false, true))
            ;

            var ckSelector = $('<a>')
                .attr('href', '#')
                .addClass(getElementCssClass('ckSelectorClass'))
                .addClass(getElementCssClass('ckSelectorClass', false, true))
            ;
            
            var ckToogle = $('<a>')
                .attr('href', '#')
                .addClass(getElementCssClass('ckToogleClass'))
                .addClass(getElementCssClass('ckToogleClass', false, true))
            ;

            var containerUl = $('<ul>')
                .attr('id', $(getSelectElement()).attr('id') + '-container')
                .addClass(getElementCssClass('ckContainerClass'))
                .addClass(getCkContainerHideClass())
                .addClass(getElementCssClass('ckContainerClass', false, true))
            ;

            if (isDebug()) {
                console.info('Copiando os elementos "option" do select "#' + $(getSelectElement()).attr('id') + '".');
            }
            
            if (isTwitterBootstrap()) {
                
                if (isDebug()) {
                    console.info('Adicionando as classes de dropdown do twitter bootstrap.');
                }
                
                var caret = $('<span>').addClass('caret');
                
                $(containerDiv).addClass(twitterBootstrapElementCssClass.ckSelectClass);
                $(ckSelector).addClass(twitterBootstrapElementCssClass.ckSelectorClass);
                $(ckToogle).addClass(twitterBootstrapElementCssClass.ckToogleClass).attr('data-toggle', 'dropdown').append(caret);
                $(containerUl).addClass(twitterBootstrapElementCssClass.ckContainerClass);
            }
            
            options.forEach(function(option, index){

                if (index === 0) {
                    $(ckSelector).html(option.display);
                }

                var link = $('<a>').attr('href', '#').attr('data-value', option.value).html(option.display);

                var li = $('<li>').append(link);

                $(containerUl).append(li);
            });
            
            if (isDebug()) {
                console.info('Adicionando os elementos no DOM.');
            }
            
            // ---------------------------------------------------------------------
            // Adiciona os elementos no DOM
            
            var ckSelectContainer = $('<div>').addClass(getElementCssClass('ckSelectContainerClass'));
            
            $(containerDiv)
                .append(ckSelector)
                .append(ckToogle)
                .append(containerUl)
            ;
            
            $(ckSelectContainer).append(containerDiv);
            
            $($(getSelectElement()).parent()).prepend(ckSelectContainer);
            
            $(ckSelectContainer).append($(getSelectElement()));
            
            // ---------------------------------------------------------------------
            // Recupera o ckSelect
            
            var ckSelect = getCekurteSelectElement();
            
            // ---------------------------------------------------------------------
            // Register Event: openSelect

            var selectorOpen = 
                '#' + $(ckSelect).attr('id')                + ' ' + 
                getElementCssClass('ckSelectorClass', true) + ', ' + 
                '#' + $(ckSelect).attr('id')                + ' ' + 
                getElementCssClass('ckToogleClass', true)
            ;

            $(selectorOpen).on('click', function() {

                // Se não estiver aberto, abre o Select, do contrário, fecha o Select.
                
                if ($(ckSelect).find('ul').hasClass(getCkContainerHideClass())) {
                    $(ckSelect).trigger('openSelect');
                } else {
                    $(ckSelect).trigger('closeSelect');
                }

                return false;
            });

            $(ckSelect).on('openSelect', openSelect);

            // ---------------------------------------------------------------------
            // Register Event: closeSelect

            var selectorClose = 
                '#' + $(ckSelect).attr('id') + ' ul li,' + 
                '#' + $(ckSelect).attr('id') + ' ul li a'
            ;

            $(selectorClose).on('click', function() {
                $(ckSelect).trigger('closeSelect', [this]);
                return false;
            });

            $(ckSelect).on('closeSelect', function(event, linkOption) {
                closeSelect(linkOption);
                return false;
            });

            // ---------------------------------------------------------------------
            // Register Event: changeSelect

            $(ckSelect).on('changeSelect', changeSelect);
            
        } else {
            if (isDebug()) {
                console.info('O Select não possuí nenhum option.');
            }
        }
        
        if (isDebug()) {
            console.info('O evento "init" foi finalizado.');
        }
        
        // ---------------------------------------------------------------------
        // Register Event: afterInit
        
        $(getSelectElement()).trigger('afterInit');
        
        return false;
    };
};