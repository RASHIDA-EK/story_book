from django.db.models import Q
from django.shortcuts import render,get_object_or_404

# Create your views here.
from .models import Story,Category

def story_list(request,category_slug=None):
    category=None
    categories=Category.objects.all()
    story=Story.objects.all()
    if category_slug:
        story = Story.objects.all()
        category = get_object_or_404(Category, slug=category_slug)
        story = story.filter(category=category)
    return render(request, 'story/story_list.html', {'categories': categories,'story': story,'category': category})

def story_detail(request,id):
    story = get_object_or_404(Story,id=id)


    return render(request,'story/story_detail.html',{'story':story})


def search_story(request):
    query=None
    results=[]
    if request.method =="GET"  :
        query=request.GET.get("search")
        results=Story.objects.filter(Q(title__icontains=query) | Q(body__icontains=query))
    return render(request,'story/search.html',{'query':query,'results':results,})

