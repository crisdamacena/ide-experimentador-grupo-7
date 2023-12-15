class TrialController < ApplicationController
    def info
      render json: "teste3"
    end
    def battery

    end
  end
  
  ## Se ficar vazio, ele pega o conteúdo da view. Se tiver render json, ele imprime um json