from django.shortcuts import render
from .models import Frases
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
import json

@csrf_exempt #desabilita e verificacao csrf
# @require_POST #So aceita requisicoes do tipo post para a view
def envia(request):
    dados = []
    enviado = json.loads(request.body)
    print(enviado['data'])
    filo = Frases.objects.order_by("id").filter(titulo__icontains=enviado['data'])
    for valor in filo:
        dados.append({"titulo": valor.titulo, "link": valor.link, "descricao": valor.descricao, "frase": valor.frase})
    
    return JsonResponse(dados, safe=False)