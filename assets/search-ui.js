// Methods and jQuery UI for Wax search box
function excerptedString(str) {
  if (str.length < 40) {
    return str;
  }
  else {
    return `${str.substring(0, 40)} ...`;
  }
}

function getThumbnail(item, url) {
  if ('thumb_150' in item) {
    return `<img class='img-thumbnail' src='${url}${item.thumb_150}'/>&nbsp;&nbsp;&nbsp;`
  }
  else {
    return '';
  }
}

function displayResult(item, fields, url) {
  var pid   = item.pid;
  var name  = item.label
  var label = item.description || 'Untitled';
  var link  = item.permalink;
  var thumb = getThumbnail(item, url);
  var meta  = []

  for (i in fields) {
    fieldLabel = fields[i];
    if (fieldLabel in item ) {
      meta.push(`<b>${fieldLabel}:</b> ${excerptedString(item[fieldLabel])}`);
    }
  }
  return `<div class="result"><a href="${url}${link}"><div class="col-sm-3">${thumb}</div><div class="col-sm-9"><p><span class="h4">${name}</span><br><span class="meta">${item.description}</span></p></div></a></div>`;
}

function startSearchUI(fields, indexFile, url) {
  $.getJSON(indexFile, function(store) {
    var index  = new elasticlunr.Index;

    index.saveDocument(false);
    index.setRef('lunr_id');

    for (i in fields) { index.addField(fields[i]); }
    for (i in store)  { index.addDoc(store[i]); }

    $('input#search').on('keyup', function() {
      var results_div = $('#results');
      var query       = $(this).val();
      var results     = index.search(query, { boolean: 'AND', expand: true });

      results_div.empty();
      results_div.append(`<p class="results-info">Displaying ${results.length} results</p>`);

      for (var r in results) {
        var ref    = results[r].ref;
        var item   = store[ref];
        var result = displayResult(item, fields, url);

        results_div.append(result);
      }
    });
  });
}
