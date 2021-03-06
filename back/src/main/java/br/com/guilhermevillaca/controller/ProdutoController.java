package br.com.guilhermevillaca.controller;

import br.com.caelum.vraptor.Controller;
import br.com.caelum.vraptor.Path;
import br.com.guilhermevillaca.core.AbstractController;
import br.com.guilhermevillaca.core.InterfaceController;
import br.com.guilhermevillaca.dao.ProdutoDao;
import br.com.guilhermevillaca.modelo.Produto;
import javax.inject.Inject;

/**
 *
 * @author Guilherme Villaca <guilherme.villaca>
 */
@Controller
@Path("/produto/")
public class ProdutoController extends AbstractController implements InterfaceController<Produto> {

    public ProdutoController() {
    }

    @Inject
    private ProdutoDao dao;

    @Path("adiciona")
    @Override
    public void adiciona(Produto produto) {
        this.dao.create(produto);
    }

    @Path("atualiza")
    @Override
    public void atualiza(Produto produto) {
        this.dao.update(produto);
    }

    @Path("remove")
    @Override
    public void remove(Integer prdCodigo) {
        this.dao.delete(prdCodigo);
    }

    @Path("pesquisa")
    @Override
    public void pesquisa() {
        this.dao.list();
    }

    @Path("pesquisaId/{id}")
    @Override
    public void pesquisa(Integer id) {
        this.dao.getById(id);
    }
    
    @Path("pesquisaCat/{id}")    
    public void pesquisaCat(Integer id) {
        this.dao.getByCat(id);
    }

}
